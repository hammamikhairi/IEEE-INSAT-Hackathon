import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';

// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
const BalancerWrapper = (props) => <Balancer {...props} />


// loading placeholder animation for the chat line
export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900">
          <a href="#" className="hover:underline">
            Assistant
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
)



// util helper to convert new lines to <br /> tags
const convertNewLines = (text) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
       {line}
      <br />
    </span>
  ))

export function ChatLine({ role = 'assistant', content, end }) {
  if (!content) {
    return null
  }
  const formatteMessage = convertNewLines(content)

  return (
    <div
      className={
        role != 'assistant' ? 'float-right clear-both' : 'float-left clear-both'
      }
    >
      <BalancerWrapper>
        <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-1 gap-4">
              <p className="font-large text-xxl text-gray-900">
                <a href="#" className="hover:underline" style={{opacity : 0.5}}>
                  {role == 'assistant' ? 'Assistant' : 'You'}
                </a>
              </p>
              <p
                className={clsx(
                  'text ',
                  role == 'assistant' ? 'font-semibold font- ' : 'text-gray-400'
                )}
              >
                {
                  !end ?
                    content
                  :
                  <>
                    <p>
                    You Have Been diagnosed with {content}, Here are a few things that can help
                    </p>
                    <div style={{paddingLeft : "3rem", paddingTop : "1rem"}}>
                      <ul >
                        {console.log(content)}
                        {
                          disorderAdvices[content].map(advice => <li style={{listStyleType : "circle", paddingLeft : "1rem"}}>{advice}</li>)
                        }
                      </ul>
                    </div>
                    <div>
                      <p>
                      you can also schedule an online therapy session with one of our trusted doctors
                      </p>
                    </div>
                    <a href={"die"} className="main-btn btn-hover border-btn mt-30">Schedule a session</a>
                    </>
                }
              </p>
            </div>
          </div>
        </div>
      </BalancerWrapper>
    </div>
  )
}

const disorderAdvices = {
  Depression: [
    "Reach out to a mental health professional for therapy or counseling.",
    "Engage in activities that bring you joy and a sense of accomplishment.",
    "Establish a routine and set achievable goals for yourself.",
    "Practice self-care regularly, including proper sleep, nutrition, and exercise.",
    "Seek support from friends, family, or support groups.",
  ],
  Anxiety: [
    "Practice deep breathing exercises and mindfulness techniques.",
    "Challenge and reframe negative thoughts or worries.",
    "Engage in regular physical exercise to reduce anxiety symptoms.",
    "Limit caffeine and alcohol consumption.",
    "Seek professional help if anxiety significantly impacts your daily life.",
  ],
  Loneliness: [
    "Reach out to friends or family members and plan social activities.",
    "Join clubs, groups, or organizations that align with your interests.",
    "Volunteer or engage in community activities to meet new people.",
    "Consider getting a pet for companionship.",
    "Practice self-compassion and focus on personal growth and hobbies.",
  ],
  Stress: [
    "Take deep breaths and practice relaxation techniques.",
    "Engage in physical activity or exercise.",
    "Spend time in nature or go for a walk.",
    "Listen to calming music or meditate.",
    "Write in a journal or practice expressive writing.",
    "Connect with loved ones and seek social support.",
    "Engage in a hobby or do something you enjoy.",
    "Practice mindfulness and focus on the present moment.",
    "Take breaks and prioritize self-care.",
    "Seek professional help or counseling if needed.",
  ],
};
