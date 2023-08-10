export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://img.thriftbooks.com/api/images/i/m/AC9018A0B59DCFC30E9520F286A6BED6380D0B9D.jpg";
   let book2 = "https://books.google.com/books/content?id=jeTSu8qm4LUC&printsec=frontcover&img=1&zoom=1&h=160&stbn=1";
   let book3 = "https://books.google.com/books/content?id=b_3gHAAACAAJ&printsec=frontcover&img=1&zoom=1&h=160&stbn=1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Mrs Obama" />
         <img src={book2} alt="History Book!" />
         <img src={book3} alt="Children Book" />
      </div>      
   );
}