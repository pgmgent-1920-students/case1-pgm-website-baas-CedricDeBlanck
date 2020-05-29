(() => { 
 const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-CedricDeBlanck';
 
 
 const loadBlog = async () => {
 const response = await fetch(`${DOMAIN}/data/team/index.json`);
 const jsonData = await response.json();
 console.log(jsonData); 
 }
 
 loadBlog();
 })();
