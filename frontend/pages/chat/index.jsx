import { Layout, Page, Text } from '@vercel/examples-ui';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Chat } from '../../components/Chat';



function ChatPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="chat-bg" >
      <Page className="flex flex-col gap-6 chat-section" style={{ paddingTop: 20, height: "100vh", zIndex: 99 }}>
        <section ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}

        >
          <Text variant="h2">Ready for a quick chat?</Text>
        </section>
        <section

          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            backdropFilter: "blur(30px)", overflowY: "scroll", overflowX: "hidden", height: "90%",
            paddingTop: 20, height: "100%"
          }}
          className="flex flex-col gap-3">
          <Chat />
        </section>
      </Page>
    </div>
  )
}

ChatPage.Layout = Layout

export default ChatPage
