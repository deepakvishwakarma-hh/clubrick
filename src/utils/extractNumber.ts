function convertPhoneNumber(phoneNumber: string) {
  phoneNumber = phoneNumber.replace('+', '').split(' ').join('');
  return phoneNumber;
}
export default convertPhoneNumber;
