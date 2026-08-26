import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard 
           title="USWNT Mic'd Up | Trinity Rodman"
           views="444K views"
           timestamp="8 days ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image="https://www.google.com/search?sca_esv=6ace4f959209648b&rlz=1C5CHFA_enUS1211US1211&sxsrf=APpeQnvQpKSjsppjDXaFxCvdyE_UtKbS5A:1787741855717&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZbooJTg6IC0i9eLmD380spFxNnOkLL2PutNy6eMVF_wEM4-gfqmM78IxB34RK6YTsKKHIT_AzAgLMyJ1gpf4P_j_OXPJLIwTXIL1-FZEJMhV1oLtseLaSi8XmwElB7vHVSA2AJA&q=UsWNT+logo&sa=X&ved=2ahUKEwiA94mykb6WAxUmoSsGHeHMOP0QtKgLegQIEhAB&biw=1408&bih=663&dpr=2#sv=CAMSURoyKhBlLVBQcHl0aEQwRng1SXBNMg5QUHB5dGhEMEZ4NUlwTToOaEc0ZXBURnZ3Z2Rvb00gBCoXCgFzEhBlLVBQcHl0aEQwRng1SXBNGAEwARgHIOeljeEMSggQARgBIAEoAQ"
        />
        <VideoCard 
           title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image="https://www.google.com/search?sca_esv=6ace4f959209648b&rlz=1C5CHFA_enUS1211US1211&sxsrf=APpeQnvQpKSjsppjDXaFxCvdyE_UtKbS5A:1787741855717&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZbooJTg6IC0i9eLmD380spFxNnOkLL2PutNy6eMVF_wEM4-gfqmM78IxB34RK6YTsKKHIT_AzAgLMyJ1gpf4P_j_OXPJLIwTXIL1-FZEJMhV1oLtseLaSi8XmwElB7vHVSA2AJA&q=UsWNT+logo&sa=X&ved=2ahUKEwiA94mykb6WAxUmoSsGHeHMOP0QtKgLegQIEhAB&biw=1408&bih=663&dpr=2#sv=CAMSURoyKhBlLVBQcHl0aEQwRng1SXBNMg5QUHB5dGhEMEZ4NUlwTToOaEc0ZXBURnZ3Z2Rvb00gBCoXCgFzEhBlLVBQcHl0aEQwRng1SXBNGAEwARgHIOeljeEMSggQARgBIAEoAQ"
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image="https://www.google.com/search?sca_esv=6ace4f959209648b&rlz=1C5CHFA_enUS1211US1211&sxsrf=APpeQnvQpKSjsppjDXaFxCvdyE_UtKbS5A:1787741855717&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZbooJTg6IC0i9eLmD380spFxNnOkLL2PutNy6eMVF_wEM4-gfqmM78IxB34RK6YTsKKHIT_AzAgLMyJ1gpf4P_j_OXPJLIwTXIL1-FZEJMhV1oLtseLaSi8XmwElB7vHVSA2AJA&q=UsWNT+logo&sa=X&ved=2ahUKEwiA94mykb6WAxUmoSsGHeHMOP0QtKgLegQIEhAB&biw=1408&bih=663&dpr=2#sv=CAMSURoyKhBlLVBQcHl0aEQwRng1SXBNMg5QUHB5dGhEMEZ4NUlwTToOaEc0ZXBURnZ3Z2Rvb00gBCoXCgFzEhBlLVBQcHl0aEQwRng1SXBNGAEwARgHIOeljeEMSggQARgBIAEoAQ"
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image="https://www.google.com/search?sca_esv=6ace4f959209648b&rlz=1C5CHFA_enUS1211US1211&sxsrf=APpeQnvQpKSjsppjDXaFxCvdyE_UtKbS5A:1787741855717&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZbooJTg6IC0i9eLmD380spFxNnOkLL2PutNy6eMVF_wEM4-gfqmM78IxB34RK6YTsKKHIT_AzAgLMyJ1gpf4P_j_OXPJLIwTXIL1-FZEJMhV1oLtseLaSi8XmwElB7vHVSA2AJA&q=UsWNT+logo&sa=X&ved=2ahUKEwiA94mykb6WAxUmoSsGHeHMOP0QtKgLegQIEhAB&biw=1408&bih=663&dpr=2#sv=CAMSURoyKhBlLVBQcHl0aEQwRng1SXBNMg5QUHB5dGhEMEZ4NUlwTToOaEc0ZXBURnZ3Z2Rvb00gBCoXCgFzEhBlLVBQcHl0aEQwRng1SXBNGAEwARgHIOeljeEMSggQARgBIAEoAQ"
        />
        <VideoCard 
         title="Highlights: USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image="https://www.google.com/search?sca_esv=6ace4f959209648b&rlz=1C5CHFA_enUS1211US1211&sxsrf=APpeQnvQpKSjsppjDXaFxCvdyE_UtKbS5A:1787741855717&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZbooJTg6IC0i9eLmD380spFxNnOkLL2PutNy6eMVF_wEM4-gfqmM78IxB34RK6YTsKKHIT_AzAgLMyJ1gpf4P_j_OXPJLIwTXIL1-FZEJMhV1oLtseLaSi8XmwElB7vHVSA2AJA&q=UsWNT+logo&sa=X&ved=2ahUKEwiA94mykb6WAxUmoSsGHeHMOP0QtKgLegQIEhAB&biw=1408&bih=663&dpr=2#sv=CAMSURoyKhBlLVBQcHl0aEQwRng1SXBNMg5QUHB5dGhEMEZ4NUlwTToOaEc0ZXBURnZ3Z2Rvb00gBCoXCgFzEhBlLVBQcHl0aEQwRng1SXBNGAEwARgHIOeljeEMSggQARgBIAEoAQ"
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image="https://www.google.com/search?sca_esv=6ace4f959209648b&rlz=1C5CHFA_enUS1211US1211&sxsrf=APpeQnvQpKSjsppjDXaFxCvdyE_UtKbS5A:1787741855717&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZbooJTg6IC0i9eLmD380spFxNnOkLL2PutNy6eMVF_wEM4-gfqmM78IxB34RK6YTsKKHIT_AzAgLMyJ1gpf4P_j_OXPJLIwTXIL1-FZEJMhV1oLtseLaSi8XmwElB7vHVSA2AJA&q=UsWNT+logo&sa=X&ved=2ahUKEwiA94mykb6WAxUmoSsGHeHMOP0QtKgLegQIEhAB&biw=1408&bih=663&dpr=2#sv=CAMSURoyKhBlLVBQcHl0aEQwRng1SXBNMg5QUHB5dGhEMEZ4NUlwTToOaEc0ZXBURnZ3Z2Rvb00gBCoXCgFzEhBlLVBQcHl0aEQwRng1SXBNGAEwARgHIOeljeEMSggQARgBIAEoAQ"
        />
        <VideoCard 
         title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image=""
           />
          <VideoCard 
           title="USWNT vs Brazil | 6/9/26"
           views="1.3M views"
           timestamp="2 Months ago"
           channelImage="https://i.ytimg.com/vi/hYtumEqzi8c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxh0YaDFOcSVXhVsV70lFfVLrBg"
           channel="USWNT"
           image=""
          /> 
      </div>
    </div>
  )
}

export default RecommendedVideos
