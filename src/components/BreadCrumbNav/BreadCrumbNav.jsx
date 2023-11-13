import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbNav() {
  return (
    <div className="bread-crumb-nav">{useCreateBreadCrumbLinks()}</div>
  )
};

function useCreateBreadCrumbLinks() {
  let pathnameArray = useGetBreadCrumbList();
  
  // map all path elements into navigation links
  const navButtons = pathnameArray.map((pathname, index) =>
    { if (index !== pathnameArray.length-1)
        return (
            createBreadCrumbWithLink(pathname, `nav-path-${index}`)
          );
      else 
        return createLastBreadCrumbWithoutLink(pathname);
    }
  );

  return navButtons;
}

function useGetBreadCrumbList() {
  // separate current path by "/"
  const locationArray = useLocation().pathname.slice(1).split("/");
  let breadcrumblist = []
  for (let i = 0; i < locationArray.length; i++) {
    if (i === 0) {
      breadcrumblist.push("/" + locationArray[i]);
    }
    else {
      breadcrumblist.push(breadcrumblist[i-1] + "/" + locationArray[i]);
    }
  }
  
  breadcrumblist = addHomeToBreadCrumbList(breadcrumblist);

  return breadcrumblist;
}

function addHomeToBreadCrumbList(list) {
  if (list[0] !== "/home") {
    list.splice(0, 0, "/home");
  }
  return list;
}

function createBreadCrumbWithLink(linkpath, breadcrumbkey) {
  let breadcrumbname = linkpath.slice(linkpath.lastIndexOf("/")+1);
  breadcrumbname = hypenatedStringToTitleCase(breadcrumbname);
  return (
    <>
      <Link to={linkpath} key={breadcrumbkey}>
        {breadcrumbname}
      </Link>
      {' > '}
    </>
  );
}

function createLastBreadCrumbWithoutLink(linkpath) {
  let breadcrumbname = linkpath.slice(linkpath.lastIndexOf("/")+1);
  breadcrumbname = hypenatedStringToTitleCase(breadcrumbname);
  return breadcrumbname;
}

function hypenatedStringToTitleCase(string) {
  let words = string.split("-");
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalizeFirstOfName(words[i]);
  }

  return words.join(" ");
}

function capitalizeFirstOfName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}