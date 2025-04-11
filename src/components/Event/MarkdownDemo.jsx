import ReactMarkdown from 'react-markdown';
import events from '../../pages/eventsData.json';
export default function MarkdownDemo({ event }) {
    console.log(event);
    return (
    
    <div className="">
      
      <ReactMarkdown>{events[5].eventDescription}</ReactMarkdown>
    </div>
  );
}