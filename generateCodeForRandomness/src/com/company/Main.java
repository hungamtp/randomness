package com.company;

import java.io.*;

public class Main {
    public static final String TEMPLATE = "%number";

    public static void main(String[] args) throws IOException {
        File template = new File("template/template.txt");
        File color = new File("template/template_color.txt");
        File ascii = new File("template/template_ascii.txt");
        BufferedReader asciiReader = new BufferedReader(new FileReader(ascii));
        BufferedReader colorReader = new BufferedReader(new FileReader(color));
        File template_js = new File("template/template_js.txt");
        File outputHtml = new File("output/index.html");
        File outputJs = new File("output/index.js");
        FileReader fr = new FileReader(template);
        FileWriter outputHtmlFr = new FileWriter(outputHtml);
        FileWriter outputJsFr = new FileWriter(outputJs);
        FileReader template_js_reader = null;
        BufferedWriter bufferedWriter = new BufferedWriter(outputJsFr);
        BufferedReader bufferedReader = null;
        StringBuilder stringBuilder = new StringBuilder("");
        while (fr.ready()) {
            stringBuilder.append(Character.toChars(fr.read()));
        }
        bufferedWriter.append(asciiReader.readLine());
        bufferedWriter.append("\n");
        bufferedWriter.append(colorReader.readLine());
        bufferedWriter.append("\n");
        for (int j = 0; j < 5; j++) {
            template_js_reader = new FileReader(template_js);
            bufferedReader = new BufferedReader(template_js_reader);
            while (bufferedReader.ready()) {
                bufferedWriter.append(bufferedReader.readLine().replace(TEMPLATE, Integer.toString(j)));
                bufferedWriter.append("\n");
            }
        }

        for (int i = 0; i < 5; i++) {
            outputHtmlFr.write(stringBuilder.toString().replace(TEMPLATE, Integer.toString(i)));
        }
        fr.close();
        outputHtmlFr.close();
        template_js_reader.close();
        bufferedReader.close();
        bufferedWriter.close();
    }
}
