/// getNewss
type ApiNewssResponse = ApiResponse<Array<ApiNewssData>>;

type ApiNewssData = {
  id: number;
  title: string;
  postMainImage: string;
  postType: string;
  createdDate: string;
};

type NewssData = {
  id: number;
  title: string;
  postMainImage: string;
  postType: string;
  createdDate: string;
};

/// getNews
type ApiNewsResponse = ApiResponse<ApiNewsData>;

type ApiNewsData = {
  id: number;
  title: string;
  postMainImage: string;
  postType: string;
  postContent: string;
  createdDate: string;
};

type NewsData = {
  id: number;
  title: string;
  postMainImage: string;
  postType: string;
  postContent: string;
  createdDate: string;
};
