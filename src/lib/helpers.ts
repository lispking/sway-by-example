import examples from "../routes/(examples)/examples.json";

export function getExample(page: string) {
  let i;
  for (i = 0; i < examples.length; i++) {
    if (page.includes(examples[i].id)) break;
  }
  return {
    self: examples[i],
    prev: examples[i - 1],
    next: examples[i + 1],
  };
}

export function convertToText(obj: any): string {
  //create an array that will later be joined into a string.
  const content = [];

  //is object
  //    Both arrays and objects seem to return "object"
  //    when typeof(obj) is applied to them. So instead
  //    I am checking to see if they have the property
  //    join, which normal objects don't have but
  //    arrays do.
  if (obj == undefined) {
    return String(obj);
  } else if (typeof obj == "object" && obj.join == undefined) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) content.push(prop + ": " + convertToText(obj[prop]));
    }
    return "{" + content.join(", ") + "}";

    //is array
  } else if (typeof obj == "object" && !(obj.join == undefined)) {
    for (const prop in obj) {
      content.push(convertToText(obj[prop]));
    }
    return "[" + content.join(",") + "]";

    //is function
  } else if (typeof obj == "function") {
    content.push(obj.toString());

    //all other values can be done with JSON.stringify
  } else {
    if (typeof obj == "string") content.push(JSON.stringify(obj));
    else if (typeof obj == "bigint") content.push(obj.toString());
    else content.push(obj.toString());
  }

  return content.join(",");
}
