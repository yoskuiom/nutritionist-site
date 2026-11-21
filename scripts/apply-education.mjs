/**
 * Точечная установка списка документов без перезаписи site.ts и About.tsx.
 * Запуск из корня проекта: node scripts/apply-education.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'data', 'site.ts');
const aboutPath = path.join(root, 'components', 'sections', 'About.tsx');
const snippetPath = path.join(root, 'scripts', 'education-site-snippet.txt');

function fail(message) {
  console.error(`❌ Установка остановлена: ${message}`);
  process.exit(1);
}
for (const file of [dataPath, aboutPath, snippetPath]) {
  if (!existsSync(file)) fail(`Не найден файл ${file}`);
}
let site = readFileSync(dataPath, 'utf8');
let about = readFileSync(aboutPath, 'utf8');
const snippet = readFileSync(snippetPath, 'utf8');

// Не дублируем код при повторном запуске.
if (site.includes('export const educationCertificates:') && about.includes('<EducationCertificates')) {
  console.log('✅ Список образования уже установлен. Изменения не нужны.');
  process.exit(0);
}
if (site.includes('export const educationCertificates:')) fail('В site.ts уже есть educationCertificates. Проверь файл вручную.');
if (about.includes('<EducationCertificates')) fail('В About.tsx уже есть EducationCertificates. Проверь файл вручную.');

const detailsPosition = about.indexOf('copy.about.qualificationDetails');
if (detailsPosition < 0) {
  fail('Не найден прежний текст qualificationDetails в About.tsx. Ничего не изменено. Используй ручную инструкцию из README.md.');
}
const detailsStart = about.lastIndexOf('<details', detailsPosition);
const detailsEnd = about.indexOf('</details>', detailsPosition);
if (detailsStart < 0 || detailsEnd < 0) {
  fail('Не найден старый блок <details> рядом с qualificationDetails. Ничего не изменено.');
}

const existingImport = "import EducationCertificates from '@/components/sections/EducationCertificates';";
if (!about.includes(existingImport)) {
  // Вставляем импорт рядом с остальными импортами, без удаления существующих.
  const importMatches = [...about.matchAll(/^import[^\n]+\n/gm)];
  if (!importMatches.length) fail('Не найдены import в About.tsx. Ничего не изменено.');
  const lastImport = importMatches.at(-1);
  const insertAt = lastImport.index + lastImport[0].length;
  about = about.slice(0, insertAt) + existingImport + '\n' + about.slice(insertAt);
  // Позиции деталей сдвинулись — находим их заново.
}
const detailsPosition2 = about.indexOf('copy.about.qualificationDetails');
const start = about.lastIndexOf('<details', detailsPosition2);
const end = about.indexOf('</details>', detailsPosition2) + '</details>'.length;
about = about.slice(0, start) + '<EducationCertificates />' + about.slice(end);
site = site.trimEnd() + '\n\n' + snippet;

// Создаём резервные копии. Не затрагиваем остальные файлы проекта.
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
for (const [source, content] of [[dataPath, readFileSync(dataPath, 'utf8')], [aboutPath, readFileSync(aboutPath, 'utf8')]]) {
  writeFileSync(`${source}.before-education-${timestamp}.bak`, content, { flag: 'wx' });
}
writeFileSync(dataPath, site, 'utf8');
writeFileSync(aboutPath, about, 'utf8');
console.log('✅ Добавлены 19 документов в data/site.ts и компонент в About.tsx.');
console.log('✅ Созданы резервные копии обоих изменённых файлов.');
