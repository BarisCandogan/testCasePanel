export interface CategoryModel {
  id: number;
  name: string;
  slug: string;
  sortOrder: number;
  status: number;
  distributor: string | null;
  distributorCode: string;
  percent: number;
  imageFile: string | null;
  displayShowcaseContent: number;
  showcaseContent: string | null;
  showcaseContentDisplayType: number;
  displayShowcaseFooterContent: number;
  showcaseFooterContent: string | null;
  showcaseFooterContentDisplayType: number;
  hasChildren: number;
  pageTitle: string | null;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string | null;
  parent: string | null;
  children: string | null;
  imageUrl: string | null;
  isCombine: number;
  isSearchable: number;
  seoSetting: {
    id: number | null;
    jsonValue: {
      canonical: string;
      index: string;
      follow: string;
    };
  };
  createdAt: string;
}

export type category = {
  name: string;
  metaDescription: string;
  metaKeywords: string;
  status: number;
  createdAt: string;
};
