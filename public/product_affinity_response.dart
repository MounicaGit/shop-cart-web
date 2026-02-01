
class ProductAffinityResponse {
  final String? requestId;
  final int? code;
  final String? message;
  final String? siteCode;
  final String? useCaseType;
  final Affinity? affinity;

  ProductAffinityResponse({
    this.requestId,
    this.code,
    this.message,
    this.siteCode,
    this.useCaseType,
    this.affinity,
  });

  factory ProductAffinityResponse.fromJson(Map<String, dynamic> json) {
    return ProductAffinityResponse(
      requestId: json['requestId'] as String?,
      code: json['code'] as int?,
      message: json['message'] as String?,
      siteCode: json['siteCode'] as String?,
      useCaseType: json['useCaseType'] as String?,
      affinity: json['affinity'] != null
          ? Affinity.fromJson(json['affinity'] as Map<String, dynamic>)
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'requestId': requestId,
      'code': code,
      'message': message,
      'siteCode': siteCode,
      'useCaseType': useCaseType,
      if (affinity != null) 'affinity': affinity!.toJson(),
    };
  }

  List<String> getL3CategoryAffinity() {
    return affinity?.level3Affinity
        ?.map((e) => e.level3Category)
        .whereType<String>()
        .toList()
        ?? [];
  }

  @override
  String toString() => 'ProductAffinityResponse('
      'requestId: $requestId, '
      'code: $code, '
      'message: $message, '
      'siteCode: $siteCode, '
      'useCaseType: $useCaseType, '
      'affinity: $affinity)';
}


class Affinity {
  final List<LevelBasedAffinity>? level1Affinity;
  final List<LevelBasedAffinity>? level2Affinity;
  final List<LevelBasedAffinity>? level3Affinity;

  Affinity({
    this.level1Affinity,
    this.level2Affinity,
    this.level3Affinity,
  });

  factory Affinity.fromJson(Map<String, dynamic> json) {
    return Affinity(
      level1Affinity: json['level1Affinity'] != null
          ? (json['level1Affinity'] as List)
              .map((v) => LevelBasedAffinity.fromJson(v as Map<String, dynamic>))
              .toList()
          : null,
      level2Affinity: json['level2Affinity'] != null
          ? (json['level2Affinity'] as List)
              .map((v) => LevelBasedAffinity.fromJson(v as Map<String, dynamic>))
              .toList()
          : null,
      level3Affinity: json['level3Affinity'] != null
          ? (json['level3Affinity'] as List)
              .map((v) => LevelBasedAffinity.fromJson(v as Map<String, dynamic>))
              .toList()
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (level1Affinity != null)
        'level1Affinity': level1Affinity!.map((v) => v.toJson()).toList(),
      if (level2Affinity != null)
        'level2Affinity': level2Affinity!.map((v) => v.toJson()).toList(),
      if (level3Affinity != null)
        'level3Affinity': level3Affinity!.map((v) => v.toJson()).toList(),
    };
  }

  @override
  String toString() => 'Affinity('
      'level1Affinity: $level1Affinity, '
      'level2Affinity: $level2Affinity, '
      'level3Affinity: $level3Affinity)';
}



class LevelBasedAffinity {
  final String? level1Category;
  final String? level2Category;
  final String? level3Category;
  final String? categoryPath;
  final double? score;

  LevelBasedAffinity({
    this.level1Category,
    this.level2Category,
    this.level3Category,
    this.categoryPath,
    this.score,
  });


  factory LevelBasedAffinity.fromJson(Map<String, dynamic> json) {
    return LevelBasedAffinity(
      level1Category: json['level1Category'] as String?,
      level2Category: json['level2Category'] as String?,
      level3Category: json['level3Category'] as String?,
      categoryPath: json['categoryPath'] as String?,
      score: json['score'] as double?,
    );
  }


  Map<String, dynamic> toJson() {
    return {
      'level1Category': level1Category,
      'level2Category': level2Category,
      'level3Category': level3Category,
      'categoryPath': categoryPath,
      'score': score,
    };
  }

  @override
  String toString() => 'LevelBasedAffinity('
      'level1Category: $level1Category, '
      'level2Category: $level2Category, '
      'level3Category: $level3Category, '
      'categoryPath: $categoryPath, '
      'score: $score)';
}
