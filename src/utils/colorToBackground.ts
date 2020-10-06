const colorToBackground = (color: string) => {
  switch (color) {
    case "primary":
      return "text-primary";
    case "danger":
      return "text-danger";
    case "yellow":
      return "text-yellow-600";
    case "blue":
      return "text-blue-500";
    case "black":
      return "text-black";
    case "green":
      return "text-green-500";
    default:
      return "text-black";
  }
};

export default colorToBackground;
