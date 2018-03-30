
package com.reactlibrary;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;



public class RNMyCustomLibModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNMyCustomLibModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;

    Log.d("xyz", "OK");
  }

  @Override
  public String getName() {
    return "RNMyCustomLib";
  }

  public static String ktNguyenTo(int _param) {

    if (_param < 2){
      return "Không phải là số nguyên tố.";
    }

    for (int i = 2; i < (_param - 1); i++){
      if (_param % i == 0){
        return "Không phải là số nguyên tố.";
      }
    }

    return "là số nguyên tố.";
  }

  /**
   * checkNumber method
   *
   * @param _number int
   * @param callback Callback
   */

  @ReactMethod
  public void checkNumber(int _number, Callback callback) {
    callback.invoke(ktNguyenTo(_number));
  }

  /**
   * async await method
   *
   * @param signal Boolean
   * @param promise Promise
   */
  @ReactMethod
  public void policy(Boolean signal, Promise promise) {
    try {
      if(!signal) {
        throw new Exception("Tôi không đồng ý với điều khoản. ");
      }

      promise.resolve("Tôi đồng ý với điều khoản của các bạn.");
    }catch(Exception e) {
      promise.resolve(e.getMessage());
    }
  }


}

