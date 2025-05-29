export default async function handler(req, res) {
  const response = await fetch('https://c8kykx-3000.csb.app/mc-ip'); // <-- your CodeSandbox URL
  const data = await response.json();
  res.status(200).json(data);
}
