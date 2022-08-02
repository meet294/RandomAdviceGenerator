import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/UI/Card";

function App() {
  //const [loading, setLoading] = useState(false);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    //setLoading(true);
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DDGQr9b5raQslRqKrxrYH3GHSEVMPA2w`
    );

    const list = await response.json();

    setBestSellers(list.results.books);
  };

  return (
    <div>
      {bestSellers.map((item) => (
        <Card
          key={item.rank}
          image={item.book_image}
          name={item.title}
          writer={item.author}
          data={item.description}
          
        >
        </Card>
       

        //const bookName = item.title;
        //const bookRank = item.rank;
        //const bookImage = item.book_image;
        //const bookDescription = item.description;
      ))}
    </div>
  );
}

export default App;
