import scaling from "../assets/Scaling.jpeg";
import rct from "../assets/RCT.jpeg";
import braces from "../assets/Braces.jpeg";
import aligners from "../assets/Aligners.jpeg";
import wisdom from "../assets/Wisdom.jpeg";
import children from "../assets/Children.jpeg";

const treatments = [
  {
    id: 1,
    name: "Scaling & Polishing",
    description: "Professional cleaning to remove plaque and tartar for healthy gums.",
    fullDescription: "Plaque and tartar build up over time, which can lead to gum disease, bad breath, and tooth decay. Scaling and polishing uses specialized ultrasonic systems to safely remove these deposits from under and around the gumline, leaving your mouth fresh and clean.",
    duration: "30 - 45 mins",
    price: "₹1,500 - ₹3,000",
    image: scaling
  },
  {
    id: 2,
    name: "Root Canal Treatment",
    description: "Procedure used to remove infected pulp and save the natural tooth.",
    fullDescription: "A root canal is a straightforward treatment designed to save a badly damaged or infected tooth. During the procedure, the infected nerve and pulp tissue are carefully removed, the inside of the tooth is cleaned and disinfected, and then sealed with a durable restoration material to prevent re-infection.",
    duration: "60 - 90 mins",
    price: "₹4,500 - ₹8,000",
    image: rct
  },
  {
    id: 3,
    name: "Orthodontic Braces",
    description: "Orthodontic braces help align teeth and correct bite issues.",
    fullDescription: "Traditional orthodontic braces use brackets and high-tensile archwires to gradually shift teeth into their correct positions. It is a highly reliable method to resolve complex crowding, spacing, and bite misalignment issues under clinical supervision.",
    duration: "12 - 24 months (Plan)",
    price: "₹25,000 - ₹50,000",
    image: braces
  },
  {
    id: 4,
    name: "Clear Aligners",
    description: "Clear aligners provide a comfortable and nearly invisible way to straighten teeth.",
    fullDescription: "Clear aligners are a modern, virtually invisible option to straighten teeth without metal brackets. Made of comfortable medical-grade plastic, these custom-designed removable trays are worn daily and changed every few weeks to guide your teeth into alignment with minimal disruption to your lifestyle.",
    duration: "6 - 18 months (Plan)",
    price: "₹45,000 - ₹1,20,000",
    image: aligners
  },
  {
    id: 5,
    name: "Wisdom Teeth Removal",
    description: "Safe extraction of impacted wisdom teeth to prevent infection and pain.",
    fullDescription: "Wisdom teeth can often become impacted, grow at angles, or cause crowding and infection. A safe, comfortable extraction is performed under local anesthesia to prevent damage to surrounding teeth and relieve persistent jaw pain, followed by full recovery support.",
    duration: "45 - 60 mins",
    price: "₹3,500 - ₹7,000",
    image: wisdom
  },
  {
    id: 6,
    name: "Dentistry for Children",
    description: "Special dental care tailored for children’s oral health and development.",
    fullDescription: "Specialized, gentle dental care designed to keep children's developing teeth healthy. From dental sealants and fluoride applications to positive behavioral styling, we ensure your child feels safe, comfortable, and develops healthy oral hygiene habits.",
    duration: "30 - 45 mins",
    price: "₹1,200 - ₹2,500",
    image: children
  }
];

export default treatments;