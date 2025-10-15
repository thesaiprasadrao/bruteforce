import React from "react";

export default function SocialCard() {
  return (
    <div className="cardWrapper">
      <div className="card">
        {/* Email */}
        <div className="cardItem">
          <a href="mailto:hackathon.bruteforce@gmail.com" className="socialContainer containerEmail" aria-label="Email">
            <svg className="socialSvg emailSvg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
            </svg>
          </a>
          <div className="contactName">Email</div>
        </div>

        {/* WhatsApp 1 - Ujjwal */}
        <div className="cardItem">
          <a href="https://wa.me/+918660841074" className="socialContainer containerWhatsapp" aria-label="WhatsApp: Ujjwal">
            <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
          <div className="contactName">Ujjwal</div>
        </div>

        {/* WhatsApp 2 - Gayatri */}
        <div className="cardItem">
          <a href="https://wa.me/+918897748027" className="socialContainer containerWhatsapp" aria-label="WhatsApp: Gayatri">
            <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
          <div className="contactName">Gayatri</div>
        </div>

        <style jsx>{`
          /* center the card when used inside a wide dark layout */
          .cardWrapper {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .card {
            width: min(760px, 92%);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 18px 24px;
            gap: 32px;
            border-radius: 12px;
          }

          .cardItem {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            min-width: 88px;
          }

          .contactName {
            font-size: 0.9rem;
            line-height: 1.1;
            color: rgba(255,255,255,0.8);
            text-align: center;
          }

          /* for all social containers (the dark rounded buttons) */
          .socialContainer {
            width: 72px;
            height: 72px;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
            transition: transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms, background-color 220ms;
            border-radius: 14px;
            box-shadow: none;
            border: 1px solid rgba(255,255,255,0.08);
            backdrop-filter: blur(6px);
          }

          /* hover colors */
          .containerEmail:hover { background-color: rgba(172,158,249,0.12); box-shadow: 0 12px 30px rgba(0,0,0,0.45); }
          .containerWhatsapp:hover { background-color: rgba(18,140,126,0.12); box-shadow: 0 12px 30px rgba(0,0,0,0.45); }

          .socialContainer:focus-visible {
            outline: 3px solid rgba(138,120,249,0.18);
            outline-offset: 4px;
          }

          .socialContainer:hover { transform: translateY(-6px) scale(1.03); }
          .socialContainer:active { transform: translateY(-2px) scale(0.98); }

          .socialSvg { width: 28px; height: auto; color: #fff; }
          .socialSvg path { fill: currentColor; }

          /* pop animation */
          @keyframes pop-in { from { transform: translateY(-8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .socialContainer:hover .socialSvg { animation: pop-in 180ms both; }

          @media (max-width: 520px) {
            .card { gap: 22px; }
            .socialContainer { width: 64px; height: 64px; }
          }
        `}</style>
      </div>
    </div>
  );
}
