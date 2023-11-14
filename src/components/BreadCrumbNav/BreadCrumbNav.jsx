import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbNav() {
  return <div className="bread-crumb-nav">{useCreateBreadCrumbLinks()}</div>;
}

function useCreateBreadCrumbLinks() {
  let pathnameArray = useGetBreadCrumbList();

  const navButtons = pathnameArray.map((pathname, index) => {
    const breadcrumbkey = `nav-path-${index}`;

    if (index !== pathnameArray.length - 1) {
      return createBreadCrumbWithLink(pathname, breadcrumbkey);
    } else {
      return createLastBreadCrumbWithoutLink(pathname, breadcrumbkey);
    }
  });

  return navButtons;
}

function useGetBreadCrumbList() {
  const locationArray = useLocation().pathname.slice(1).split("/");
  let breadcrumbList = [];

  for (let i = 0; i < locationArray.length; i++) {
    breadcrumbList.push(
      i === 0
        ? "/" + locationArray[i]
        : breadcrumbList[i - 1] + "/" + locationArray[i]
    );
  }

  return addHomeToBreadCrumbList(breadcrumbList);
}

function addHomeToBreadCrumbList(list) {
  if (list[0] !== "/home") {
    list.unshift("/home");
  }
  return list;
}

function createBreadCrumbWithLink(linkPath, breadcrumbKey) {
  let breadcrumbName = hypenatedStringToTitleCase(
    linkPath.slice(linkPath.lastIndexOf("/") + 1)
  );
  return (
    <Fragment key={breadcrumbKey}>
      <Link to={linkPath}>{breadcrumbName}</Link>
      {" > "}
    </Fragment>
  );
}

function createLastBreadCrumbWithoutLink(linkPath, breadcrumbKey) {
  let breadcrumbName = hypenatedStringToTitleCase(
    linkPath.slice(linkPath.lastIndexOf("/") + 1)
  );
  return <Fragment key={breadcrumbKey}>{breadcrumbName}</Fragment>;
}

function hypenatedStringToTitleCase(string) {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
