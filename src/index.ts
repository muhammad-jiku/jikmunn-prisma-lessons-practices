/** @format */

import app from './app';

const port = process.env.PORT || 8080;

async function main() {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

main();
