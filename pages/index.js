"use client";
import Nav from "./components/nav";
// import Tooltips from "./tooltips";
import Cards from "./components/cards";
import { useState, useEffect } from "react";
import HelpTips from "./components/helpTips";
import ZoomSelection from "./components/zoomSelection";
import Tipsbox from "./components/tipsbox";
import CardDetail from "./components/cardDetail";
import { Constants } from "../utils/CONSTANTS";
import Sound from "./components/sound";
import StartModal from "./components/startModal";
import { getContractMeta } from "../utils/thirdweb";
// import { Web3Button } from "@thirdweb-dev/react";
// import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
export default function Home() {
  // music related state
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [sfxIndex, setSfxIndex] = useState(0);
  const [volume, setVolume] = useState(0.69);

  const [selectedCard, setSelectedCard] = useState({});
  const [cardSelected, setCardSelected] = useState(false);
  const [cardsRemaining, setCardsRemaining] = useState(20);
  const [isNewLevel, setNewLevel] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [finalCard, setFinalCard] = useState({});
  const [modalType, setModalType] = useState("start");
  const [modalOpen, setModalOpen] = useState(true);
  const [contractMeta, setContractMeta] = useState({});
  // const [contract, setContract] = useState(null);
  // const sdk = new ThirdwebSDK("mumbai");
  useEffect(() => {
    console.log("use effect new level?:", isNewLevel);
    getContractMeta().then((metadata) => {
      console.log("metadata", metadata);
      setContractMeta(metadata);
    });
  }, [isNewLevel]);

  // useEffect(() => {
  //   sdk
  //     .getContract("0xe003E4487f62cf8fa6a84C517293780b85aedb86")
  //     .then((contract) => {
  //       setContract(contract);
  //     });
  // }, []);

  const songs = Constants.songs;

  console.log(songs);
  const [chosenCard, setChosenCard] = useState({
    name: "none",
    id: 0,
    profile_path: "",
    description: "dadeuce",
  });

  useEffect(() => {
    console.log("chosenCard", chosenCard);
  }, [chosenCard.name]);

  const handleLevelComplete = (selectedCard) => {
    console.log("level complete:", currentLevel);
    setFinalCard(selectedCard);
    resetCards();
    setCurrentLevel(currentLevel + 1);
    setSelectedSongIndex(selectedSongIndex + 1);
    setCardsRemaining(20);
  };

  const resetCards = () => {
    // reset the cards to the initial state
    setNewLevel(true);
    console.log("first");
  };

  const handleHelper = () => {
    console.log("helper clicked");
    setModalType("help");
    setModalOpen(true);
  };

  const tips = [
    // "take turns asking yes/no questions to dadeuce!",
    "give me a tip, send to wingbird.eth",
  ];

  // useEffect(() => {
  //   document.title = `DaDeuce! ${totalClicks} | ${chosenCard.name} | ${cardsRemaining}`;
  // }, [totalClicks]);

  return (
    <>
      {/* <Heads totalClicks={totalClicks} /> */}
      <main>
        <Nav
          chosenCard={chosenCard}
          isNewLevel={isNewLevel}
          setNewLevel={setNewLevel}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          selectedSongIndex={selectedSongIndex}
          songs={songs}
          sfxIndex={sfxIndex}
          setSfxIndex={setSfxIndex}
          volume={volume}
        />
        <div className="flex flex-col md:flex-row justify-center content-center items-center">
          <div className="w-full h-full">
            {/* <AudioPlayer /> */}
            <div className="flex justify-center">
              {" "}
              <Tipsbox
                chosenCard={chosenCard}
                tips={tips}
                cardsRemaining={cardsRemaining}
                finalCard={finalCard}
              />
              <div
                className="text-slate-200 text-center hover:text-slate-400 cursor-pointer rounded-full border-[3px] border-slate-600 hover:bg-slate-400 h-fit p-0.5"
                onClick={() => {
                  alert("tooltips in progress ");
                }}
              >
                ❔
              </div>
            </div>
          </div>
          <CardDetail
            selectedCard={selectedCard}
            cardSelected={cardSelected}
            contractMeta={contractMeta}
          />
        </div>
        <Cards
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          className="items-center"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          cardSelected={cardSelected}
          setCardSelected={setCardSelected}
          cardsRemaining={cardsRemaining}
          setCardsRemaining={setCardsRemaining}
          handleLevelComplete={handleLevelComplete}
          totalClicks={totalClicks}
          setTotalClicks={setTotalClicks}
          isNewLevel={isNewLevel}
          setNewLevel={setNewLevel}
          setSfxIndex={setSfxIndex}
          sfxIndex={sfxIndex}
          volume={volume}
        />
      </main>
      <footer className="my-2 text-center transition-colors duration-200">
        {/* <div className="">
          <ul className="flex flex-row justify-between px-5 sm:text-xl">
            <li className="flex">
              <a className="text-blue-200 hover:bg-blue-600" href="/">
                Home
              </a>
            </li>
            <li
              className={
                gorditas.className + " text-slate-300 hover:bg-slate-500 flex"
              }
            >
              <a href="/about">About</a>
            </li>
            <li
              className={`${islandMoments.className} text-slate-300  hover:bg-slate-600 text-2xl`}
            >
              <a href="/contact">Contact</a>
            </li>
            <li
              className={
                frijole.className + " flex text-slate-300 hover:bg-slate-700"
              }
            >
              <a href="/kickstart">Kickstart</a>
            </li>
          </ul>
        </div> */}
        <div className="flex flex-row justify-around">
          <ZoomSelection />
          <HelpTips handleHelper={handleHelper} />
          {/* <button className="z-10 text-slate-200 bg-slate-600 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1">
            Sound on/off 🔈slider
          </button> */}
          <Sound
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            volume={volume}
            setVolume={setVolume}
          />
        </div>
        <StartModal
          modalImage={"/images/dadeuce.png"}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalType={modalType}
          setModalType={setModalType}
          volume={volume}
          songs={songs}
          setVolume={setVolume}
          isMuted={isMuted}
          contractMeta={contractMeta}
        />
      </footer>
      {/* <Web3Button
        contractAddress="0xe003E4487f62cf8fa6a84C517293780b85aedb86"
        action={(contract) => {
          contract.call("claim", [
            _receiver,
            _tokenId,
            _quantity,
            _currency,
            _pricePerToken,
            _allowlistProof,
            _data,
          ]);
        }}
      >
        claim */}
      {/* </Web3Button> */}
    </>
  );
}
