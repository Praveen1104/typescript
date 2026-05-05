let direction: "north" | "south" | "east" | "west";

direction = "north";

//numbet literals

let numberLiterals: 1 | 2 | 3 | 4 | 5;

type sucessRespose = {
  message: "success";
  cose: 200;
};

type errorResponse = {
  message: "error";
  code: 400 | 401;
};

type apiResponse = sucessRespose | errorResponse;
