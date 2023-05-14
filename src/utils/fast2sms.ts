import axios from 'axios';

const API_KEY = '3ZA8rIBQjwYDGaXF6VvuTbpJNcPi45LqRMtCK7smEOxlH92UgSAwZRJKyosrGFhYCf1W72cMxBQdXjTt';

const sendOtp = async (numbers:number, variablesValues:number) => {
  const url = 'https://www.fast2sms.com/dev/bulkV2';
  const params = {
    route: 'otp',
    numbers: numbers,
    variables_values: variablesValues,
  };
  const config = {
    headers: {
      'Authorization': API_KEY,
    },
    params: params,
  };
  try {
    const response = await axios.get(url, config);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export {sendOtp}