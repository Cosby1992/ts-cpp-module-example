#include <napi.h>

// Define the sum function
Napi::Number Sum(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsNumber()) {
    Napi::TypeError::New(env, "Number arguments expected").ThrowAsJavaScriptException();
    return Napi::Number::New(env, 0);
  }

  double arg0 = info[0].As<Napi::Number>().DoubleValue();
  double arg1 = info[1].As<Napi::Number>().DoubleValue();
  double sum = arg0 + arg1;

  return Napi::Number::New(env, sum);
}

// Define the sub function
Napi::Number Sub(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsNumber()) {
    Napi::TypeError::New(env, "Number arguments expected").ThrowAsJavaScriptException();
    return Napi::Number::New(env, 0);
  }

  double arg0 = info[0].As<Napi::Number>().DoubleValue();
  double arg1 = info[1].As<Napi::Number>().DoubleValue();
  double result = arg0 - arg1;

  return Napi::Number::New(env, result);
}

// Init function for both sum and sub
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "sum"), Napi::Function::New(env, Sum));
  exports.Set(Napi::String::New(env, "sub"), Napi::Function::New(env, Sub));
  return exports;
}

NODE_API_MODULE(math, Init)