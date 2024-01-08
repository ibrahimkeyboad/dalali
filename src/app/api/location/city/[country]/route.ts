import fs from 'node:fs/promises';
import { join } from 'node:path';

export async function GET(
  req: Request,
  { params }: { params: { country: string } }
) {
  console.log('params', params);
  const filePath = join(
    process.cwd(),
    `src/data/${params.country}/cities.json`
  );
  const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
  return Response.json(JSON.parse(fileContent));
}
