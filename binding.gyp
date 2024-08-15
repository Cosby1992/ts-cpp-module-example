{
    "targets": [
        {
            "target_name": "basic-math",
            "sources": ["src/basic-math/basic-math.cpp"],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').targets\"):node_addon_api",
            ],
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
            "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            "conditions": [
                [
                    "OS=='win'", {
                        "msvs_settings": {
                            "VCCLCompilerTool": {"ExceptionHandling": 0}
                        }
                    },
                    'OS=="mac"', {
                        'cflags+': ['-fvisibility=hidden'],
                        'xcode_settings': {
                            'GCC_SYMBOLS_PRIVATE_EXTERN': 'YES',  # -fvisibility=hidden
                        }
                    }]
            ]
        }
    ]
}
