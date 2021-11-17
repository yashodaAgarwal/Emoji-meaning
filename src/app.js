import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy",
  "😁": "Beaming face",
  "😂": "Laughing",
  "🤣": "Hard laughing",
  "😃": "Happy with big eyes",
  "😄": "Very happy",
  "😅": "Grinning face with sweat",
  "🥰": "Feeling loved and cared",
  "😘": "Kissing",
  "🤩": "Amused",
  "🤔": "Thinking",
  "😥": "Sad",
  "😣": "Stressed",
  "😴": "Sleepy",
  "😛": "Naughty",
  "🙄": "Rolling eyes",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🌱": "Seedling",
  "🌲": "Evergreen Tree",
  "🌳": "Deciduous Tree",
  "🌴": "Palm Tree",
  "🌵": "Cactus",
  "🌾": "Sheaf of Rice",
  "🌿": "Herb",
  "🍀": "Four Leaf Clover",
  "🌑": "New Moon",
  "🌒": "Waxing Crescent Moon",
  "🌓": "First Quarter Moon",
  "🌔": "Waxing Gibbous Moon",
  "🌕": "Full Moon",
  "🌖": "Waning Gibbous Moon",
  "🌗": "Last Quarter Moon",
  "🌘": "Waning Crescent Moon",
  "🌙": "Crescent Moon",
  "🌚": "New Moon Face",
  "🌛": "First Quarter Moon Face",
  "🌜": "Last Quarter Moon Face",
  "☀️": "Sun",
  "🌝": "Full Moon Face",
  "🌞": "Sun with Face",
  "⭐": "Star",
  "🌟": "Glowing Star"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji meaning in our database. Sorry !!";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <p>
        Enter the Emoji you want to find the meaning of or click on the Emojis
        which are given below.
      </p>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <h2>Also visit my portfolio <a href="https://arpitpatni.netlify.app/">Arpit</a> </h2>
    </div>
  );
}
