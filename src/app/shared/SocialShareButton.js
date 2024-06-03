import { useEffect } from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';


const ShareButton = () => {
  const router = useRouter();

  const handleShare = () => {
    const shareableUrl = `${process.env.NEXT_PUBLIC_APP_URL}/page?${queryString.stringify({

      id: '123',
      // ...
    })}`;

    // Use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'Share this page',
        url: shareableUrl,
      });
    } else {
      
      window.open(shareableUrl, '_blank');
    }
  };

  useEffect(() => {
    // Use router here
    console.log(router.pathname);
  }, [router]);


  return (
    <button onClick={handleShare}>
      Share
    </button>
  );
};

export default ShareButton;
