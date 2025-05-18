
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({ text, className, el: Wrapper = "h1" }: AnimatedTextProps) => {
  return (
    <Wrapper className={cn("flex flex-wrap", className)}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="mr-2 inline-block overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <span 
              key={`${wordIndex}-${charIndex}`} 
              className="inline-block opacity-0 animate-fade-in"
              style={{ animationDelay: `${(wordIndex * 0.1) + (charIndex * 0.05)}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Wrapper>
  );
};

export default AnimatedText;
