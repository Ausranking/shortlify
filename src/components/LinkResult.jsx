import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Loading from "./Loading";
/*...........................................................
 THE PLAN IS TO SEE PREVIOUS URL ACTIVITY OF A USER
How can it work even while displaying the Link results only when a url is provided?
const getLocalStorage = () => {
  let shortenedLink = localStorage.getItem("shortenedLink")

  if (shortenedLink) {
    return JSON.parse(localStorage.getItem("shortenedLink"))
  } else {
    return[]
  }
}
...........................................................
*/

const LinkResult = ({ inputValue }) => {
  const [shortenedLink, setShortenedLink] = useState([]);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //........apilayer configurations...............
  var myHeaders = new Headers();
  myHeaders.append("apikey", "edSkFCjbzciGxWJh5sBebG1r3KBz7ADW");
  var raw = inputValue;
  var options = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
  };
  //...............................................

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.apilayer.com/short_url/hash",
        options
      );
      const res = await response.json();
      setLoading(true);
      if (response.ok) {
        setShortenedLink(res.short_url);
      } else {
        console.error(res.message);
        setError("....................");
      }

      // setLoading(false)
    } catch (err) {
      alert(err);
      if (err.message === "Failed to fetch") {
        setError("Not a valid url ... please check");
      }
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [copied, error]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  // THE PLAN IS TO SEE PREVIOUS URL ACTIVITY OF A USER
  // useEffect(() => {
  //   localStorage.setItem("shortenedLink", JSON.stringify(shortenedLink) )
  // }, [shortenedLink])

  //   console.log(shortenedLink);

  return (
    <>
      {inputValue && (
        <div className="w-11/12 mx-auto bg-gray relative  mb-10">
          {error ? (
            <p className="text-rose text-sm text-center -mt-[4rem]">
              provide a valid url
            </p>
          ) : (
            <div className="bg-white flex  items-center justify-between px-4 h-12 mt-[-4rem]  rounded-md">
              <p className="text-sm max-md:hidden">{inputValue}</p>
              <div className="flex items-center justify-between space-x-4 max-md:w-full">
                {loading ? <Loading /> : <p>{shortenedLink}</p>}
                <CopyToClipboard
                  text={shortenedLink}
                  onCopy={() => setCopied(true)}
                >
                  {copied ? (
                    <button className="bg-dark_violet px-6 font-mono text-success py-2 rounded gradient">
                      copied!
                    </button>
                  ) : (
                    <button className="px-6 py-2 gradient font-mono text-white rounded">
                      {" "}
                      copyy
                    </button>
                  )}
                </CopyToClipboard>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LinkResult;
