function reCreatedObject(objects) {
  return objects.map(x => {
    return {
      id: x.id,
      dayOfWeek: x.dayOfWeek
    };
  });
}

let result = reCreatedObject(weekday)
console.log(result);