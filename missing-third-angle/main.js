function missingThirdAngle(angle1, angle2) {
  const sum = angle1 + angle2;
  if (sum > 90) {
    return "acute";
  } else if (sum < 90) {
    return "obtuse";
  } else if (sum === 90) {
    return "right";
  }
}
