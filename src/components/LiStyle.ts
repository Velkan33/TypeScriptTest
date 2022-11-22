export function style() {
 document.addEventListener("DOMContentLoaded", () => {
  let $li = document.querySelectorAll("li") as NodeListOf<HTMLLIElement>;

  //UL
  $li[0].parentElement?.classList.add("list-decimal", "list-inside");
  //Each LI
  $li.forEach((li) => {
   li.classList.add("mb-3", "hover:list-outside");
  });
 });
}
