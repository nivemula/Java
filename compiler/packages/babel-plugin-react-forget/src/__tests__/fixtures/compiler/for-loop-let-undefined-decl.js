function useFoo() {
  for (let i = 0; i <= 5; i++) {
    let color;
    if (isSelected) {
      color = isCurrent ? "#FFCC22" : "#FF5050";
    } else {
      color = isCurrent ? "#CCFF03" : "#CCCCCC";
    }
    console.log(color);
  }
}

export const FIXTURE_ENTRYPOINT = {
  params: [],
  fn: useFoo,
};