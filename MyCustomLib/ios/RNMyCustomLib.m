
#import "RNMyCustomLib.h"
#import <React/RCTConvert.h>

@implementation RNMyCustomLib

//- (dispatch_queue_t)methodQueue
//{
//    return dispatch_get_main_queue();
//}
RCT_EXPORT_MODULE();
//
- (NSArray<NSString *> *)supportedEvents {
    return @[@"checkNumber"];
}

-(NSString *)ktNguyenTo:(int)_param {
    
    if (_param < 2){
        return @"không phải là số nguyên tố.";
    }
    
    for (int i = 2; i < (_param - 1); i++){
        if (_param % i == 0){
            return @"không phải là số nguyên tố.";
        }
    }
    
    return @"là số nguyên tố";
    
}

#pragma mark - checkNumber

RCT_EXPORT_METHOD(checkNumber:
                  (int)_number
                  callback:(RCTResponseSenderBlock) callback) {
    NSString * c = [self ktNguyenTo:_number];

    callback(@[c]);
}

#pragma mark - policy


RCT_REMAP_METHOD(policy,
                 policyKey:(BOOL *)policyKey
                 resolve:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject) {
    NSString *data=[[NSString alloc ]init];
    @try {
        if(policyKey == NO) {
            @throw [NSException exceptionWithName:@"PolicyException" reason:@"Tôi không đồng ý với điều khoản" userInfo:nil];
        }
        data =@"Tôi đồng ý với điều khoản của các bạn";
        resolve(data);
    }@catch(NSException *exception) {
        data =@"Tôi không đồng ý với điều khoản của các bạn";
        resolve(data);
    }
}

@end
  
