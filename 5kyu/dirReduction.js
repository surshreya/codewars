function dirReduc(arr) {
  const dirMap = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
