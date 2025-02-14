```javascript
//Corrected usage in a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearInterval(intervalId); //Cleanup function
  }, []); //Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
```