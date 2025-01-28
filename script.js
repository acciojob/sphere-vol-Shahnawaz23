function volume_sphere() {
    //Write your code here
  // Retrieve the radius input from the user
  const radiusInput = document.getElementById("radius").value;

  // Convert the input to a number
  const radius = parseFloat(radiusInput);

  // Validate the input: check if it is a non-negative number
  if (isNaN(radius) || radius < 0) {
    // Display NaN for invalid input
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to four decimal places
  const roundedVolume = volume.toFixed(4);

  // Display the calculated volume in the output field
  document.getElementById("volume").value = roundedVolume;
} 

document.getElementById("MyForm").onsubmit = function (e) {
  e.preventDefault(); // Prevent the default form submission
  volume_sphere(); // Call the volume_sphere function
};
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
