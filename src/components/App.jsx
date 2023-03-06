import { useState }  from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions ";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export function App() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
   
    const buttonClickTotal = e => {
        const { name } = e.target;
    
        switch (name) {
            case 'good':
                setGood( prevState => prevState + 1);
                break;
          
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
          
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };

  const countTotalFeedback = () => {
           return good + neutral + bad;
   }

  const countPositiveFeedbackPercentage = () => {
           return Math.round(good / countTotalFeedback() * 100)
   }

       return (
       <div 
       style={{
        width: '360px',
        margin: '30px',
    
       }}
       >
           <Section title="Please leave feedback">
                   <FeedbackOptions options={{ good, neutral, bad }} 
               onLeaveFeedback={buttonClickTotal} />
           </Section>

           { countTotalFeedback() !== 0 ? 
           (<Section title="Statistics">
           <Statistics 
           good={good}
           neutral={neutral}
           bad={bad}
           total={countTotalFeedback()} 
           positivePercentage={countPositiveFeedbackPercentage()}
           />
           </Section>) : 
           (<Notification message="There is no feedback" />)
           } 
       </div> 
       )
   }