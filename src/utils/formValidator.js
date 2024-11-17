export function getError(formData) {
  for (const value of Object.values(formData)) {
    if (isNaN(value)) return "Please fill all fields to caluculate results";
  }

  if (formData.duration < 1) return "Duration must be greater than one year";
  return null;
}
