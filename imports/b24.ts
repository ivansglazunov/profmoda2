import * as b24 from "b24";
import * as rp from "request-promise";
import * as queryString from "query-string";
import * as _ from "lodash";

export default async ({ title, user, userId, location, utms }) => {
  const args = {
    LOGIN: "menzorg@gmail.com",
    PASSWORD: "0123456789asdf",
    TITLE: `${location.href} ${title}`,
    NAME: user.fullname,
    PHONE_HOME: user.phone,
    EMAIL_HOME: user.email,
    UF_CRM_1433529455: location.href,
    PRODUCT_ID: location.pathname,
    SOURCE_DESCRIPTION: location.href,
    COMMENTS: user.comment,
    UF_CRM_1559607141: `https://metrika.yandex.ru/stat/visitors?period=week&filter=(EXISTS+ym%3Aup%3AspecialUser+WITH+(EXISTS(ym%3Aup%3AparamsLevel1%3D%3D%2527userId%2527+and+ym%3Aup%3AparamsLevel2%3D%3D%2527${userId}%2527)))&id=53888251`,
    ..._.transform(utms, (result, value, key: string) => {
      result[key.toUpperCase()] = value;
    })
  };
  const q = queryString.stringify(args);
  await rp(
    `https://styleschool.bitrix24.ru/crm/configs/import/lead.php?${q}`
  );
};
