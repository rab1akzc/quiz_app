 export const fetchData=async()=> {
     const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const articles = await res.json();
        return articles
 }
