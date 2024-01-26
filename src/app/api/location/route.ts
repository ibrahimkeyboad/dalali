import fs from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  const filePath = join(process.cwd(), 'src/data/location.json');
  const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
  // console.log(fileContent);
  return Response.json(JSON.parse(fileContent));
}
