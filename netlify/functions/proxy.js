exports.handler = async function(event, context) {
  const response = await fetch('https://c8kylx-3000.csb.app/mc-ip');
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
