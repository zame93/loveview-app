const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxbP8KXs5asASmq76L9Gs2mo3u1JOhQo4KEIocwIJR1Fj5xpfqkMwXmC3DJg9xmSw8/exec";

export async function createBusiness(data) {

  const params = new URLSearchParams({
    action: "createBusiness",
    businessName: data.businessName,
    ownerName: data.ownerName,
    mobile: data.mobile,
    email: data.email,
    category: data.category,
    reviewUrl: data.reviewUrl,
    rewardName: data.rewardName || ""
  });

  const response = await fetch(`${WEB_APP_URL}?${params}`);

  return await response.json();

}

export async function getBusiness(businessId) {

  const response = await fetch(
    `${WEB_APP_URL}?action=getBusiness&businessId=${businessId}`
  );

  return await response.json();

}

export async function trackRating(businessId, rating) {

  const response = await fetch(
    `${WEB_APP_URL}?action=trackRating&businessId=${businessId}&rating=${rating}`
  );

  return await response.json();

}

export async function trackFeedback(
  businessId,
 rating,
  issue,
  comment
) {

  const params = new URLSearchParams({
    action: "trackFeedback",
    businessId,
    rating,
    issue,
    comment
  });

  const response = await fetch(
    `${WEB_APP_URL}?${params}`
  );

  return await response.json();

}

export async function getDashboard(businessId) {

  const response = await fetch(
    `${WEB_APP_URL}?action=getDashboard&businessId=${businessId}`
  );

  return await response.json();

}