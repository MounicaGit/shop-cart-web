import 'dart:convert';

import 'package:commons/commons.dart';
import 'package:dio/dio.dart';
import 'package:shop_app/catalog/data/network/response/product_info_response.dart';
import 'package:shop_app/locator.dart';
import 'package:shop_app/utils/constants.dart';
import 'package:shop_app/utils/device_utils.dart';
import 'package:shop_app/utils/dio_utils.dart';

class ProductInfoApiProvider {
  Future<List<ProductInfoResponse>> fetchProducts(
      {required String siteCode, CancelToken? cancelToken}) async {
    Map<String, dynamic> queryParameters = {
      'siteId': appSiteCodeSelected.toLowerCase(),
      'companyId': companyId,
      'appType': locator<DeviceUtils>()
          .getPlatformIdentifier(isForSecure: true, isMobileGroup: false),
      'storeId': siteCode
    };
    Response response = await locator<AppDioClient>(
            instanceName: AppDioClient.catalogDioClientNamedKey)
        .dio
        .get('/v2/mobile/getProductUrl',
            queryParameters: queryParameters, cancelToken: cancelToken);
    var result = json.decode(response.data);
    return (result as List)
        .map((e) => ProductInfoResponse.fromJson(e))
        .toList();
  }
}
