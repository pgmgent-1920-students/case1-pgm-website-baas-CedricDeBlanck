(() => {  
    
  
    const loadBlog = async () => {
      const response = await fetch(`https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/team/index.json?token=ANGVHBR64GASJTCGAYZ7IPS63JS5S`);
      const jsonData = await response.json();
     console.log(jsonData);    
    }
  
    loadBlog();
  })();
