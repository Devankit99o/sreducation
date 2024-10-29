'use client';
import { useEffect, useState } from 'react';

const FacebookPageEmbed = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById('facebook-jssdk')) {
      setSdkLoaded(true);
      return;
    }

    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v10.0',
      });
      setSdkLoaded(true); // Set state once SDK is loaded
    };

    // Load the Facebook SDK asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className="relative w-full h-[700px]"> {/* Full width and fixed height for parent */}
      <div id="fb-root"></div>

      {/* Show either the SDK-loaded Facebook page or fallback iframe */}
      {sdkLoaded ? (
        <div
          className="fb-page absolute inset-0 w-full h-full" // Use w-full and h-full for full dimensions
          data-href="https://www.facebook.com/profile.php?id=100083442156234" // Replace with your Facebook page URL
          data-tabs="timeline,events"
          data-height="700"
          data-small-header="false"
          data-hide-cover="false"
          data-show-facepile="true"
          data-hide-cta="true"
          data-lazy="true"
          // style={{ maxWidth: '1200px', width: '100%', borderRadius: '16px', overflow: 'hidden' }}

        ></div>
      ) : (
        // Fallback iframe if SDK isn't loaded
        <iframe
          title="Facebook Page"
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=100083442156234&tabs=timeline&width=1000&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          className="absolute  w-full h-full bg-gray-100 rounded-lg" // Use w-full and h-full for full dimensions
          style={{ border: 'none', overflow: 'hidden' }} 
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}

      
    </div>
  );
};

export default FacebookPageEmbed;
