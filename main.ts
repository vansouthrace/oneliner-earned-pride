import fs from 'node:fs';
import path from 'node:path';

const entry = `After three years of night shifts, she held her daughter's hand at the graduation gate and finally believed the tired years had been worth it.`;
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry);
