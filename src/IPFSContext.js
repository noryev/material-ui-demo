import { createContext, useContext, useState } from "react";
import { NFTStorage, File } from "nft.storage";

const IPFSContext = createContext({});

export function IPFSContextProvider(props) {
  const [IPFSuploading, setIPFSuploading] = useState(false);
  const [IPFSerror, setIPFSerror] = useState(null);

  async function IPFSupload(data, file) {
    try {
      setIPFSerror(null);
      setIPFSuploading(true);
      const client = new NFTStorage({
        token: process.env.REACT_APP_NFT_STORAGE_KEY
      });
      const metadata = await client.store({
        name: data.name,
        description: data.description,
        image: new File([file], file.name, { type: file.type })
      });
      console.log(metadata);
      return metadata.url;
    } catch (error) {
      console.error(error);
      setIPFSerror(error);
    } finally {
      setIPFSuploading(false);
    }
  }

  return (
    <IPFSContext.Provider value={{ IPFSuploading, IPFSerror, IPFSupload }}>
      {props.children}
    </IPFSContext.Provider>
  );
}

export function useIPFS() {
  return useContext(IPFSContext);
}


// figure out console.log for this part too- 